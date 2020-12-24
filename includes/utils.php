<?php
/**
 * Includes all essential functions required for common tasks.
 *
 * @package SmartDocs
 */

function smartdocs_get_template_part( $slug, $name = '' ) {
	$template = false;

	if ( ! empty( $name ) ) {
		$template = locate_template(
			array(
				"smart-docs/{$slug}-{$name}.php",
			)
		);

		if ( ! $template ) {
			$fallback = SMART_DOCS_PATH . "templates/{$slug}-{$name}.php";
			$template = file_exists( $fallback ) ? $fallback : '';
		}
	}

	if ( empty( $template ) ) {
		$template = locate_template( array(
			"smart-docs/{$slug}.php"
		) );

		if ( ! $template ) {
			$fallback = SMART_DOCS_PATH . "templates/{$slug}.php";
			$template = file_exists( $fallback ) ? $fallback : '';
		}
	}

	if ( $template ) {
		load_template( $template, false );
	}
}

function smartdocs_get_template( $template_name, $args = array() ) {
	$template = locate_template(
		array(
			"smart-docs/{$template_name}.php"
		)
	);

	if ( empty( $template ) ) {
		$fallback = SMART_DOCS_PATH . "templates/{$template_name}.php";
		$template = file_exists( $fallback ) ? $fallback : '';
	}

	if ( ! empty( $template ) ) {
		extract( $args ); // @codingStandardsIgnoreLine

		include $template;
	}
}

function smartdocs_get_current_terms() {
	$current_terms = array();

	if ( is_singular( SmartDocs\Plugin::instance()->cpt->post_type ) ) {
		global $post;
		$current_terms = wp_get_post_terms( $post->ID, 'smartdocs_category', array( 'fields' => 'slugs' ) );
	} elseif ( is_tax( 'smartdocs_category' ) ) {
		$current_term = get_queried_object();
		$current_terms[] = $current_term->slug;
		if ( $current_term->parent ) {
			$parent_term = get_term_by( 'id', $current_term->parent, 'smartdocs_category' );
			if ( $parent_term ) {
				$current_terms[] = $parent_term->slug;
			}
		}
	}

	if ( ! is_array( $current_terms ) ) {
		$current_terms = array();
	}

	return $current_terms;
}

function smartdocs_list_docs( $term ) {
	$post_type = SmartDocs\Plugin::instance()->cpt->post_type;
	
	if ( ! is_singular( $post_type ) ) {
		return;
	}

	$current_post_id = get_the_ID();
	$posts = get_posts(array(
		'post_type' 	=> $post_type,
		'numberposts' 	=> -1,
		'tax_query' 	=> array(
			array(
				'taxonomy' => 'smartdocs_category',
				'field' => 'term_id', 
				'terms' => $term->term_id,
				'include_children' => false
			)
		)
	) );

	if ( is_array( $posts ) && ! empty( $posts ) ) {
		foreach ( $posts as $doc ) {
			?>
			<li class="<?php echo $current_post_id === $doc->ID ? 'active' : ''; ?>">
				<a href="<?php echo get_permalink( $doc ); ?>"><?php echo get_the_title( $doc ); ?></a>
			</li>
			<?php
		}
	}
}

function smartdocs_list_categories( $args, $count ) {
	$args['parent'] = 0;
	$parent_cats = get_categories( $args );
	$current_terms = smartdocs_get_current_terms();

	if ( ! empty( $parent_cats ) ) {
		foreach ( $parent_cats as $parent_cat ) {
			$child_cat_args = $args;
			$child_cat_args['parent'] = $parent_cat->term_id;
			$child_cats = get_categories( $child_cat_args );
			?>
			<li class="cat-item cat-item-<?php echo $parent_cat->term_id; ?><?php echo in_array( $parent_cat->slug, $current_terms ) ? ' active' : ''; ?>">
				<a href="<?php echo get_term_link( $parent_cat->term_id ); ?>">
					<span class="cat-label"><?php echo $parent_cat->name; ?></span>
					<?php if ( $count ) { ?>
					<span class="cat-count"><?php echo $parent_cat->count; ?></span>
					<?php } ?>
				</a>
				<?php if ( in_array( $parent_cat->slug, $current_terms ) && $parent_cat->count && ! $child_cats ) { ?>
					<ul class="has-posts">
						<?php smartdocs_list_docs( $parent_cat ); ?>
					</ul>
				<?php } ?>
				<?php if ( ! empty( $child_cats ) ) { ?>
					<ul class="children">
						<?php foreach ( $child_cats as $child_cat ) {
							$grandchild_cat_args = $child_cat_args;
							$grandchild_cat_args['parent'] = $child_cat->term_id;
							$grandchild_cats = get_categories( $grandchild_cat_args );
							?>
							<li class="cat-item cat-item-<?php echo $child_cat->term_id; ?><?php echo in_array( $child_cat->slug, $current_terms ) ? ' active' : ''; ?>">
								<a href="<?php echo get_term_link( $child_cat->term_id ); ?>">
									<span class="cat-label"><?php echo $child_cat->name; ?></span>
									<?php if ( $count ) { ?>
									<span class="cat-count"><?php echo $child_cat->count; ?></span>
									<?php } ?>
								</a>
								<?php if ( in_array( $child_cat->slug, $current_terms ) && $child_cat->count && ! $grandchild_cats ) { ?>
									<ul class="has-posts">
										<?php smartdocs_list_docs( $child_cat ); ?>
									</ul>
								<?php } ?>
								<?php if ( ! empty( $grandchild_cats ) ) { ?>
									<ul class="children">
										<?php foreach ( $grandchild_cats as $grandchild_cat ) { ?>
										<li class="cat-item cat-item-<?php echo $grandchild_cat->term_id; ?><?php echo in_array( $grandchild_cat->slug, $current_terms ) ? ' active' : ''; ?>">
											<a href="<?php echo get_term_link( $grandchild_cat->term_id ); ?>">
												<span class="cat-label"><?php echo $grandchild_cat->name; ?></span>
												<?php if ( $count ) { ?>
												<span class="cat-count"><?php echo $grandchild_cat->count; ?></span>
												<?php } ?>
											</a>
											<?php if ( in_array( $grandchild_cat->slug, $current_terms ) && $grandchild_cat->count ) { ?>
												<ul class="has-posts">
													<?php smartdocs_list_docs( $grandchild_cat ); ?>
												</ul>
											<?php } ?>
										</li>
										<?php } ?>
									</ul>
								<?php } ?>
							</li>
						<?php } ?>
					</ul>
				<?php } ?>
			</li>
			<?php
		}
	}
}

function smartdocs_post_class( $class = '' ) {
	//echo implode( ' ', get_post_class( $class ) );
	echo $class;
}

function is_smartdocs_single() {
	return is_singular( 'smart-docs' );
}

function is_smartdocs_category( $term = '' ) {
	return is_tax( 'smartdocs_category', $term );
}

function smartdocs_get_docs_page_link() {
	$use_built_in = get_option( 'smartdocs_use_built_in_doc_archive' );
	$docs_page_id = get_option( 'smartdocs_custom_doc_page' );

	if ( ! $use_built_in && ! empty( $docs_page_id ) ) {
		$docs_page    	= get_post( $docs_page_id );
		$permalink 		= $docs_page ? get_permalink( $docs_page ) : '';
	}

	if ( ! isset( $permalink ) || empty( $permalink ) ) {
		$permalink = get_post_type_archive_link( 'smart-docs' );
	}

	return $permalink;
}

function smartdocs_get_support_page_link() {
	return get_option( 'smartdocs_support_page_url', '#' );
}

function smartdocs_get_category_thumbnail_url( $term_id ) {

	$smartdocs_category_thumb_id     = get_term_meta( $term_id, 'thumbnail_id', true );
	$smartdocs_taxonomy_thumbnail_id = get_term_meta( $term_id, 'taxonomy_thumbnail_id', true );

	if ( empty( $smartdocs_category_thumb_id ) ) {
		$smartdocs_category_thumb_id = $smartdocs_taxonomy_thumbnail_id;
	}

	$smartdocs_category_image = wp_get_attachment_image_src( $smartdocs_category_thumb_id, 'thumbnail' );

	return $smartdocs_category_image;
}
