export default function Cd({ item }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: item.order ? "row" : "row-reverse",
      }}
    >
        <div>
            <h1>{item?.title}</h1>
            <h2>{item?.description}</h2>
        </div>
        <div>
            <img src= {item?.imageUrl} alt ="projects" />
        </div>
    </div>

  );
}
