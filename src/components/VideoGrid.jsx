import { Col, Divider, Row } from "antd";
import VideoCard from "./VideoCard";

function VideoGrid({ videos }) {
  return videos ? (
    <div
      style={{
        padding: "50px 50px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Row gutter={[16, 16]} justify={"center"} width={"100%"}>
        {videos.map((video) => (
          <Col key={video.title}
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            xl={{ span: 4 }}

          >
            <VideoCard
              title={video.title}
              thumbnail={video.thumbnail}
              bucket={video.bucket}
              url={video.url}
              videoId={video.id}
              bucketId={video.bucketId}
            />
          </Col>
        ))}
      </Row>
      <Divider width={"100%"} />
    </div>
  ) : (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h4>No Videos found</h4>
    </div>
  );
}

export default VideoGrid;
