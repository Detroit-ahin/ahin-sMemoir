import "./testimonials.scss";
import {Button} from "@material-ui/core"

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Official Twitter Profile",
      href:'https://twitter.com/Detroit_ahin24',
      title: "",
      img:
        "assets/twiprofile.jpg",
      icon: "assets/twitter.png",
      desc:
        "Check my twitter to get in touch. There I share my thoughts over the time about many topics.",
    },
    {
      id: 2,
      name: "Official Github Profile",
      href:'https://github.com/Detroit-ahin',
      title: "",
      img:
        "assets/gitprofile.jpg",
      icon: "assets/github.png",
      desc:
        "I am a Full stack developer so i use github to showcase my codes . Anyone can check codes and see my repositories.",
      featured: true,
    },
    {
      id: 3,
      name: "Official Linkedin Profile",
      href:'https://www.linkedin.com/in/ahin-subhra-das-2280401b6/',
      title: "",
      img:
        "assets/linprofile.jpg",
      icon: "assets/linkedin.png",
      desc:
        "In linkedin profile you can check my technical skills . Anyone can connect with me using linkedin also. ",
       
        
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Prefered links</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
        <Button href={d.href} variant="contained" color="primary">Check Now</Button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}