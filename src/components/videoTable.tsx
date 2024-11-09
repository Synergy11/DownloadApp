import "../styles/rightVideo.css"
import { FaVideo } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { RiDownload2Fill } from "react-icons/ri";
export function VideoTable(videoDetail: VideoDetail) {
    console.log(videoDetail)
    return (
      <div>
        <div className="title">
          <h4 className="active">
            <FaVideo />
            Video
          </h4>
          <h4>
            <FaMusic />
            Audio
          </h4>
        </div>
        <div className="table-body">
          <div className="premium">
            <button>
              <RiDownload2Fill />
              Premium Download & No Ads
            </button>
                </div>
                <div className="download">
                    
                </div>
        </div>
      </div>
    );
}