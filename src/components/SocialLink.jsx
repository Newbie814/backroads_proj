const SocialLink = () => {
  const socialLinks = [
    {
      id: 1,
      url: 'https://www.facebook.com',
      icon: 'fab fa-facebook',
    },
    {
      id: 2,
      url: 'https://www.twitter.com',
      icon: 'fab fa-twitter',
    },
    {
      id: 3,
      url: 'https://www.squarespace.com',
      icon: 'fab fa-squarespace',
    },
  ];
  return (
    <ul className='nav-icons'>
      {socialLinks.map((link) => {
        const { id, url, icon } = link;
        return (
          <li key={id}>
            <a href={url} target='_blank' className='nav-icon'>
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialLink;
