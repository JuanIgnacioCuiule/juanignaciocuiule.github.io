class Profile extends React.Component {
  constructor() {
    super();
    this.state = { done: false };
    this.getData = this.getData.bind(this);
  }

  componentWillMount() {
    this.getData(this.props.username);
  }

  getData(username) {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(res => {
        const { login, bio, name, blog, location, company, avatar_url } = res;
        this.setState({
          done: true,
          login,
          bio,
          name,
          blog,
          location,
          company,
          avatar_url
        });
      });
  }

  render() {
    const {
      login,
      bio,
      name,
      blog,
      location,
      company,
      avatar_url
    } = this.state;
    const bioData = { login, bio, name, blog, location, company };
    const socialData = {
      twitter: "@juancuiule",
      github: login,
      linkedin: "juanignaciocuiule"
    };
    return (
      <div className="profile">
        {this.state.done && <Picture src={avatar_url} />}
        {this.state.done && <Bio data={bioData} />}
        {this.state.done && <Social data={socialData} />}
      </div>
    );
  }
}

function Picture({ src }) {
  return <img className="picture" src={src} />;
}

function Bio({ data }) {
  const { bio, name, blog, location, company } = data;
  return (
    <div className="bio">
      <h1>{name}</h1>
      <a className="anchor" href={`https://${blog}`}>
        {blog}
      </a>
      <span>{bio}</span>
      <span>
        {location && (
          <span>
            <i className="fa fa-map-marker" aria-hidden="true" />
            {location}
          </span>
        )}
      </span>
      <span>{company || ""}</span>
    </div>
  );
}

function Social({ data }) {
  const { twitter, github, linkedin } = data;
  return (
    <div className="social">
      <div className="twitter">
        <a href={`https://twitter.com/${twitter}`}>
          <i className="fa fa-twitter" aria-hidden="true" />
        </a>
      </div>
      <div className="github">
        <a href={`https://github.com/${github}`}>
          <i className="fa fa-github" aria-hidden="true" />
        </a>
      </div>
      <div className="linkedin">
        <a href={`https://linkedin.com/in/${linkedin}`}>
          <i className="fa fa-linkedin" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Profile username="juancuiule" />,
  document.getElementById("root")
);
