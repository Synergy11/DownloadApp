export const item =[
  {title: "quality"},
  {title: "MB Size"},
  {title: "Download"}
]
function BodyView() {
  console.log(item);
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
      <p>By using our service you are accepting our <a href="#" className="text-danger ">Terms of Use.</a></p>

      <div className="container text center" >
        <div className="row ">
        <div className="col-auto">
          {/* video image link  */}
        </div>
        <div className="col-auto">
              <h4>video detail</h4>
              <div className="row text-center">
                <div className="col">quality</div>
                <div className="col">MB Size</div>
                <div className="col">Download</div>
              </div>
        </div>
        </div>
      </div>
    </div>
  );
}


export default BodyView;
