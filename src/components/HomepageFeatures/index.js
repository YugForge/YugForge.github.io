import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Metaverse creation',
    Svg: require('@site/static/img/Homepage/metaverse.svg').default,
    description: (
      <>
        Seamlessly immerse your designs into the metaverse with our 3D web editor. Easily export your creations to virtual environments, fostering a bridge between your digital designs and the expanding metaverse landscape. 

      </>
    ),
  },
  {
    title: 'Architectural visualization',
    Svg: require('@site/static/img/Homepage/Land.svg').default,
    description: (
      <>
        our web editor offers specialized tools for creating stunning architecture websites. From visualizing building designs in 3D to incorporating interactive walkthroughs, our features empower you to showcase architectural projects with unparalleled detail.
      </>
    ),
  },
  {
    title: 'Game creation platform',
    Svg: require('@site/static/img/Homepage/game.svg').default,
    description: (
      <>
       Empowering users to craft interactive and engaging gaming experiences, this feature allows you to build and customize your own games within the 3D environment.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
