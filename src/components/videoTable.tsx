import "../styles/rightVideo.css"
import { FaVideo } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { RiDownload2Fill } from "react-icons/ri";
type VideoDetailProps = {
  quality: string;
  size: string;
}[];

export function VideoTable({ videoDetail }: { videoDetail: VideoDetailProps }) {
  const Video = videoDetail;
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
        <table className="download">
          <thead>
            <tr>
              <th>MP4 auto quality</th>
              <th>MB</th>
              <th className="center">
                <button>Download</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {Video.map((item, index) => (
              <tr key={index}>
                <td>{item.quality} (.mp4)</td>
                <td>{item.size} MB</td>
                <td className="center">
                  <button>Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}