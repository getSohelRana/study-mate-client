
const CreatePartnerProfile = () => {
  const handleCreateProfile = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <h1>Create Partner Profile</h1>
      {/* FORM */}
      <div className="form-control gap-3">
        <form onSubmit={handleCreateProfile}>
          <fieldset>
            {/* Name */}
            <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Name"
              />
              {/* Photo URL */}
               <label className="label mt-3">Photo URL</label>
              <input
                type="url"
                name="photo"
                className="input w-full"
                placeholder="Photo URL"
              />
      
              {/* Email */}
                <label className="label mt-3">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
              />
      
                      {/* Password */}
                     
                      {/* <small className="text-error">{passwordError}</small> */}
                      <small className="text-error">{}</small>
                      <button
                        className="btn bg-[#00c497] text-white mt-3 w-full"
                        type="submit"
                      >
                        Sign Up
                      </button>
                    </fieldset>
                  </form>
                </div>
    </div>
  );
};

export default CreatePartnerProfile;