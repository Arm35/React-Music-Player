import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addSong } from "../features/player/playerSlice";
import { useNavigate } from "react-router-dom";
import "./MusicUploadForm.css";

const MusicUploadForm = ({ }) => {

    const dispatch = useDispatch();
    const navigate=useNavigate()
    const { songs } = useSelector((st) => st.player);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const save = (data) => {
        dispatch(addSong(data));
        navigate('/')
    };

    return (
        <div>
            <form onSubmit={handleSubmit(save)} >
                <div>
                    <label className="label">Title</label>
                    <input className="input-field" {...register("title",{ required: "Field is required" })} type="text" placeholder="Enter title" />
                    {errors.title && <p>{errors.title.message}</p>}
                </div>
                <div>
                    <label className="label">Artist</label>
                    <input className="input-field" {...register("artist", { required: "Field is required" })} type="text" placeholder="Enter artist name" />
                    {errors.title && <p>{errors.title.message}</p>}
                </div>
                <div>
                    <label className="label">Track Number</label>
                    <input className="input-field" {...register("track", { required: "Field is required" })} type="number" placeholder="Enter track" />
                    {errors.title && <p>{errors.title.message}</p>}
                </div>
                <div>
                    <label className="label">Duration</label>
                    <input className="input-field" {...register("duration", { required: "Field is required" })} type="number" placeholder="Enter duration" />
                    {errors.duration && <p>{errors.duration.message}</p>}
                </div>
                <div>
                    <label className="label">Year</label>
                    <input  className="input-field" {...register("year", { required: "Field is required" })} type="number" placeholder="Enter year" />
                    {errors.year && <p>{errors.year.message}</p>}
                </div>
                <div>
                    <label className="label">Description</label>
                    <textarea className="input-field" {...register("description", { required: "Field is required" })} type="text" placeholder="Enter description" />
                    {errors.description && <p>{errors.description.message}</p>}
                </div>
                <button className="button">Add Song</button>
            </form>
        </div>
    );
};

export default MusicUploadForm;