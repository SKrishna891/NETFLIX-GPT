

const VideoTitle = ({title,overview}) =>{
    return(
        <div className="pt-[20%] px-24 absolute bg-gradient-to-r from-black/60 text-white w-screen aspect-video">
<h1 className="text-3xl font-bold">{title}</h1>
<p className=" py-6 text-lg w-2/4">{overview}</p>
<div>
    <button className=" m-2 p-2 px-8 text-black bg-white hover:bg-white/70   rounded-lg ">▶️Play</button>
    <button className=" m-2 p-2 px-8 text-black bg-white  rounded-lg hover:bg-white">More Info</button>
</div>
        </div>
    )
};

export default VideoTitle;