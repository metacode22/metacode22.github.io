import { StaticImage } from 'gatsby-plugin-image';

const IntroductionAvatar = () => {
  return (
    <StaticImage
      src='../../../contents/images/KakaoTalk_Photo_2022-10-14-16-31-39.jpeg'
      alt='내 얼굴'
      placeholder='blurred'
      width={200}
      height={200}
    />
  );
};

export default IntroductionAvatar;
