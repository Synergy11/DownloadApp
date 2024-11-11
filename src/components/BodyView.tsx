import { Video } from "../items/items";
import { VideoTable } from "./videoTable";
import "../styles/Video.css";

function BodyView() {
  return (
    <div className="container rounded text-center mt-5 p-5 bg-body-tertiary">
      <label className="form-label fs-1">Download video from All Media</label>

      <div className="container input-group w-50">
        <input
          type="text"
          className="form-control  "
          placeholder="Search or paste link here..."
        />
        <input
          className="btn btn-outline-info"
          type="submit"
          value={"Download"}
        />
      </div>
      <p>
        By using our service you are accepting our{" "}
        <a href="#" className="text-danger ">
          Terms of Use.
        </a>
      </p>
      <div className="container text center">
        <div className="row ">
          <div className="flex">
            {Video.map((video: {image:string,title:string}, index: number) => (
              <div key={index} className="videoContainer">
                <div className="leftVideo">
                  <img src={video.image} alt="" />
                  <h5 className="">{video.title}</h5>
                </div>
              </div>
            ))}
                <div className="rightVideo">
                  <VideoTable videoDetail ={Video} />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyView;
