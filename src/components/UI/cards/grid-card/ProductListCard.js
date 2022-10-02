import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from 'styles/ProductListCard.module.scss';
import images from 'assets/images';
import Utilities from 'utils/Utility';
import ProductTopContent from 'components/UI/cards/grid-card/ProductTopContent';
import PricingContainer from 'components/UI/cards/grid-card/PricingContainer';
const ProductListCard = ({ list = {} }) => {
  console.log(list);
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/product', { state: { slug } });
    window.scroll(0, 0);
  };
  if (list.length === 0) {
    return null;
  }
  const widthCard = Utilities.getDynamicWidthForGrid(2, 16) + 7;
  const heightCard = Utilities.getDynamicWidthForGrid(2, 16) + 110;
  const imageHeight = Utilities.getDynamicWidthForGrid(2, 60);
  const {
    image_url: image = '',
    mrp = '',
    discount = '',
    final_sp = '',
    rating = '',
    name = '',
    slug = '',
    variants_details: variantDetails = {},
    brand = {},
  } = list;
  const { name: brandName = '' } = brand;
  const { variants_count: variantsCount = '', variants_shade_images: variantsShadeImages = [] } =
    variantDetails;
  return (
    <div
      onClick={onClick}
      className={styles['product-card-container']}
      style={{ width: widthCard, height: heightCard }}>
      <div className={styles['product-card-sub-container']}>
        <ProductTopContent
          rating={rating}
          variantsCount={variantsCount}
          variantsShadeImages={variantsShadeImages}
        />
        <div className={styles['product-image']}>
          <img alt="Product Image" src={image} height={imageHeight} width={widthCard} />
        </div>
        <PricingContainer
          brandName={brandName}
          name={name}
          final_sp={final_sp}
          mrp={mrp}
          discount={discount}
        />
      </div>
      <div className={styles['add-to-bag']}>
        <img alt="Add To Bag" src={images.addToBag} height={38} width={38} />
      </div>
    </div>
  );
};

export default ProductListCard;
