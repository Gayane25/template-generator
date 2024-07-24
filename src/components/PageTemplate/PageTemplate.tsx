import React from 'react';

import { Date, EyeIcon, Facebook, Instagram, Twitter } from 'assets/Icons';
import cover from 'assets/images/cover.png';
import placeholder from 'assets/images/placeholder.png';
import { Slider } from 'components/Slider';

import { useStyles } from './PageTemplate.styles';

export type IPageTemplate = {
  pageTemlateType ?: 'single-image-grid' | 'two-images-grid' | 'slider-grid';
}

const PageTemplate: React.FC<IPageTemplate> = ({ pageTemlateType }) => {
  const classes = useStyles();

  const SingleImageGrid = (
    <div className={classes.wrapper}>
      <div className={classes.root}>
        <div className={classes.category}>Category</div>
        <div className={classes.title}>Title</div>
        <div className={classes.icons}>
          <span>Author Name</span>
          <span>
            <Date />
            <span>Date</span>
          </span>
          <span>
            <EyeIcon />
            <span>View count</span>
          </span>
        </div>
        <div className={classes.cover}>
          <img src={cover} alt={cover} />
        </div>
        <div className={classes.bottomSection}>
          <p className={classes.descripton}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste necessitatibus dicta voluptatem molestiae
            consequatur maxime ullam ad quam blanditiis in excepturi earum voluptate quidem eius perferendis, praesentium
            nam unde vitae. Atque delectus possimus autem excepturi ut veniam voluptate mollitia itaque, enim aspernatur
            similique nulla eos tempora laudantium possimus ipsa, minima voluptas aliquid earum esse. Consequuntur hic
            quae modi molestiae.
          </p>
          <div className={classes.socialIcons}>
            <span>Share</span>
            <span><Facebook /></span>
            <span><Twitter /></span>
            <span><Instagram /></span>
          </div>
        </div>
      </div>
    </div>
  );

  const TwoImagesGrid = (
    <div className={classes.twoImagesWrapper}>
      <div className={classes.twoImagesRoot}>
        <div className={classes.cover}>
          <img src={cover} alt={cover} />
        </div>
        <div className={classes.main}>
          <div className={classes.twoIMageIcons}>
            <span>Share</span>
            <span><Facebook /></span>
            <span><Twitter /></span>
            <span><Instagram /></span>
          </div>
          <div className={classes.rightSection}>
            <div className={classes.title}>Title</div>
            <span>
              <Date />
              <span>Date</span>
            </span>
            <p className={classes.descripton}>
              Lorem ipsum dolor sit amet conilique nulla eos tempora laudantium possimus ipsa, minima voluptas aliquid
              earum esse. Consequuntur hic quae modi molestiae.
            </p>
            <div className={classes.placeholder}>
              <img src={placeholder} alt={placeholder} />
              <p className={classes.descripton}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto consequatur asperiores, et
                distinctio incidunt, expedita cumque amet excepturi dolore laboriosam perferendis? Aut quibusdam dolor
                nulla quo omnis obcaecati incidunt. Praesentium harum nam sapiente ea? Mollitia omnis doloremque nam
                optio odit laudantium, libero maxime minus, dicta quisquam eum, consequatur quod. Error fugiat
                voluptatibus corporis. Tenetur quibusdam ut voluptatum explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SliderGrid = (
    <div className={classes.sliderGridRoot}>
      <Slider />
      <div className={classes.sliderGridDesc}>
        <div className={classes.category}>Category</div>
        <div className={classes.title}>Title</div>
        <p className={classes.descripton}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste necessitatibus dicta voluptatem molestiae
          consequatur maxime ullam ad quam blanditiis in excepturi earum voluptate quidem eius perferendis, praesentium
          nam unde vitae. Atque delectus possimus autem excepturi ut veniam voluptate mollitia itaque, enim aspernatur
          similique nulla eos tempora laudantium possimus ipsa, minima voluptas aliquid earum esse. Consequuntur hic quae
          modi molestiae.
        </p>
        <div className={classes.buttonsGroup}>
          <button className={classes.button}>Button1</button>
          <button className={classes.button}>Button2</button>
        </div>
        <ul>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
      </div>
    </div>
  );

  const pageTemplateObj = {
    'single-image-grid': SingleImageGrid,
    'two-images-grid': TwoImagesGrid,
    'slider-grid': SliderGrid,
  };

  return <div>{pageTemlateType ? pageTemplateObj[pageTemlateType] : null}</div>;
};

export default PageTemplate;
