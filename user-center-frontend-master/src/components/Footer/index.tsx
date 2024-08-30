import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
import {PLANET_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = '黄依炀出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '自研小课堂',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '个人博客',
          href: 'https://blog.csdn.net/weixin_64930996?spm=1000.2115.3001.5343',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/> 黄依炀 GitHub</>,
          href: 'https://github.com/HuangYiYang0903/-',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
