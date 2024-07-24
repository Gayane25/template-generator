import React from 'react';

import avatar from 'assets/images/avatar.png';
import { Facebook, Instagram, Twitter } from 'assets/Icons';
import { ITypes } from 'components/SelectBox';

import { useStyles } from './SignatureTemplate.styles';

const SignatureTemplate:React.FC<ITypes> = ({ type }) => {
  const classes = useStyles();

  const classesObj = {
    'left-align': classes.left,
    'center-align': classes.center,
    'right-align': classes.right,
  };

  return (
    // @ts-ignore
    <div className={classesObj[type]}>
      <div className={classes.avatarSection}>
        <div className={classes.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={classes.icons}>
          <span>
            <Facebook />
          </span>
          <span>
            <Twitter />
          </span>
          <span>
            <Instagram />
          </span>
        </div>
      </div>
      <div className={classes.descriptionSection}>
        <div>
          <span>Name</span>
          <span>Surname</span>
        </div>
        <span>Job Title</span>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eum quibusdam, pariatur optio nihil magni adipisci porro autem officiis iusto quas vitae voluptatem suscipit nulla minus itaque exercitationem error iure.
          Est, accusamus. Ut dignissimos ipsum itaque nulla rem fugit doloribus, iure minus animi expedita corporis quod quos inventore saepe delectus aspernatur ratione? Numquam nostrum asperiores illum temporibus debitis dolorem est.
        </p>
      </div>
    </div>
  );
};

export default SignatureTemplate;
