import React, { useState ,useRef} from "react";
import "./Adding.scss";
import { v4 as uuidv4 } from "uuid";
import logo from "../../assets/imgs/muhammad-name-img.jpg";
import { Link } from "react-router-dom";

function Adding({ menuItems, setMenuItems,setstories,stories }) {
  let [inputVal, setInutVal] = useState("");
  let [countinput, setCountinput] = useState(1);
  const divRef = useRef(null)
  const[num,setNum]=useState(1)
  const[num2,setNum2]=useState(0)
  const[num3,setNum3]=useState(0)
  const[son,setSon]=useState(0)


  const onChangeHandler1 = (e) => {
    setInutVal(e.target.value);
    console.log(e);
    setCountinput(e.target.value.length);
    if (e.keyCode === 13 || e.keyCode === 40) {
      setSon(0)
      setNum(num+1)
      setNum2(num2+1)
      setNum3(num2*30)
      divRef.current.style = `transform:translateY(${num*30}px)`
      console.log(divRef.current);
    }
    if(e.keyCode === 68){
      setSon(son+1)
      console.log(son);
    }
    if (e.keyCode === 8) {
      setNum(num-1)
      if (num3 !== 0) {
        setNum3(num3-30)
      }else{
        setNum3(0)
      }
      divRef.current.style = `transform:translateY(${num3}px)`
      console.log(divRef.current);
    }
    console.log(num3);
  };

  const publishHandler = () => {
    setstories([...stories, {decs: inputVal, id:uuidv4(),} ])
    console.log(stories);
    setMenuItems([
      {
        name: "Muhammadsodiq",
        avatar: logo,
        title: "React Best DevOps tool in Demand 2022",
        decs: inputVal,
        img: logo,
        id: uuidv4(),
        data: "1 minute ago",
        type: "React",
        like: "20",
        commets: "12",
        commetsArr: [
          {
            id: "31",
            userImg:
              "https://miro.medium.com/fit/c/40/40/1*KK9NopjghPSVTnr0YlLOrw@2x.jpeg",
            commetsName: "MXM",
            commentsDate: "25 days ago",
            commetnsDesc:
              "I have a PhD in Cognitive Psychology with a specialty area of HCI and over 30 years of experience in the field we now call UX. I have been targeted for ageist layoffs twice in my 50s. In my last job search 3 years ago, I applied to over 100 jobs",
            commentsClub: "36",
          },
          {
            id: "32",
            userImg:
              "https://miro.medium.com/fit/c/40/40/1*40uVS-9JquYZTHKx0YVGvQ.jpeg",
            commetsName: "Soungbogbo Omotayo",
            commentsDate: "29 days ago",
            commetnsDesc: `I’m happy for you 👏🏻👏🏻
          Tapping from your grace would help when I start applying for jobs in UX 😫😫😫`,
            commentsClub: "1",
          },
          {
            id: "33",
            userImg: "https://miro.medium.com/fit/c/40/40/0*G3M_xM7ypQHvow1q",
            commetsName: "Aashishb",
            commentsDate: "about 1 month ago",
            commetnsDesc: `Hello, I am aashish from Jodhpur, India
          Prepare for ux developer, 
          I see your ads and see profile. 😫😫😫`,
            commentsClub: "13",
          },
          {
            id: "34",
            userImg: "https://miro.medium.com/fit/c/40/40/0*KyAs6-tZsvVsPsKB",
            commetsName: "Dana Wu",
            commentsDate: "15 days ago",
            commetnsDesc: `Hi Afroze, great article! It will be super 👏🏻👏🏻 helpful for a lot of people if you can share more about how did you get referal through linkedin : )`,
            commentsClub: "4",
          },
          {
            id: "35",
            userImg:
              "https://miro.medium.com/fit/c/40/40/1*rtwEUAxCH4FvZ7mOHcF_UA.png",
            commetsName: "Abdullah Ashari",
            commentsDate: "20 days ago",
            commetnsDesc: `Hi! May I know are your LinkedIn connections are those you know in person from your school or work, or are they people you just met on LinkedIn who are in the design field that you are interested in venturing into?`,
            commentsClub: "",
          },
          {
            id: "36",
            userImg:
              "https://miro.medium.com/fit/c/40/40/1*aSUe5V4rGqTzN1hsQILDRw.jpeg",
            commetsName: "Arina Lowery",
            commentsDate: "25 days ago (edited)",
            commetnsDesc: `I am a little bit confused. How a candidate can be seen as a 'passionate' one if they don't even have 1 project in their portfolio? Even if it is a bad project it already shows that the candidate is trying to learn on their own and, indeed, has,`,
            commentsClub: "24",
          },
          {
            id: "37",
            userImg:
              "https://miro.medium.com/fit/c/40/40/1*aMq3ANt8EHeCZMQZz6pJzg.jpeg",
            commetsName: "Uka I. Paul",
            commentsDate: "9 days ago",
            commetnsDesc: `Thanks alot for this... I really enjoyed reading everything and also learnt alot from it. I'm much confident and prepared for any interview now.`,
            commentsClub: "24",
          },
          {
            id: "38",
            userImg:
              "https://miro.medium.com/fit/c/40/40/1*dmbNkD5D-u45r44go_cf0g.png",
            commetsName: "Jessie Keel",
            commentsDate: "13 days ago",
            commetnsDesc: `This was absolutely amazing and super helpful for someone new to the UX scene , yet my experience and skill set from previous jobs are very much related to the Design Thinking Process`,
            commentsClub: "",
          },
          {
            id: "39",
            userImg:
              "https://miro.medium.com/fit/c/40/40/1*KK9NopjghPSVTnr0YlLOrw@2x.jpeg",
            commetsName: "MXM",
            commentsDate: "25 days ago",
            commetnsDesc:
              "I have a PhD in Cognitive Psychology with a specialty area of HCI and over 30 years of experience in the field we now call UX. I have been targeted for ageist layoffs twice in my 50s. In my last job search 3 years ago, I applied to over 100 jobs",
            commentsClub: "36",
          },
        ],
      },
      ...menuItems,
    ]);
  };

  return (
    <div className="adding">
      <div className="add container">
        <div className="add__left d-flex align-items-center">
          <div className="add__left-logo">
            <Link to="/home">
              <svg viewBox="0 0 1043.63 592.71" className="unlimit__logo-img">
                <g data-name="Layer 2">
                  <g data-name="Layer 1">
                    <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
                  </g>
                </g>
              </svg>
            </Link>
          </div>
          <p className="add__name">Muhammadsodiq</p>
        </div>
        <div className="add__right">
          <div className="add__right-div d-flex align-items-center">
            {inputVal.length >= 1 ? (
              <Link to="/home">
                <button
                  className={`add__btn ${countinput <= 0 ? "disabled" : ""}`}
                  onClick={publishHandler}
                >
                  Publish
                </button>
              </Link>
            ) : (
              <button className={`add__btn1 ${countinput <= 0 ? "" : ""}`}>
                Publish
              </button>
            )}
            <svg className="svgIcon-use m-3" width={25} height={25}>
              <path
                d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z"
                fillRule="evenodd"
              />
            </svg>

            <svg
              className="svgIcon-use me-2"
              width={25}
              height={25}
              viewBox="-293 409 25 25"
            >
              <path d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 00-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 001 1h3.49a3.079 3.079 0 003.01 2.45 3.08 3.08 0 003.01-2.45h3.49a1 1 0 001-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 01-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 014.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z" />
            </svg>
            <img className="add__img" src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="add__textarea-div">
        <div ref={divRef} className="add__ball">
          <svg class="svgIcon-use" width="25" height="25">
            <path
              d="M20 12h-7V5h-1v7H5v1h7v7h1v-7h7"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>

        <textarea
          onKeyUp={onChangeHandler1}
          className="add__textarea"
          placeholder="Tell your story"
          cols="30"
          rows="30"
        ></textarea>
      </div>
    </div>
  );
}

export default Adding;
