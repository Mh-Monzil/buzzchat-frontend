

const GenderCheckbox = () => {
    return (
        <div className="flex my-2.5">
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text">Male</span>
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-accent" />
                </label>
            </div>
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text">Female</span>
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-accent" />
                </label>
            </div>
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text">Others</span>
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-accent" />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;