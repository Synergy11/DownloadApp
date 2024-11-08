import { VideoDetails } from "../Items/items";
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
          <div className="col-auto">{/* video image link  */}</div>
          <div className="col-auto">
            <h4>Video Detail</h4>
            <div className="row text-center">
              {VideoDetails.map((videoDetails, index) => (
                <div className="col" key={index}>
                  {videoDetails.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyView;
