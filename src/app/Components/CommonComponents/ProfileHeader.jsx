function ProfileHeader({ coverImage, profileImage, fullName, tittle }) {

  return (
    <div className="text-center">
      {coverImage && (
        <div className="coverImage flex items-center justify-center">
          <img
            className="block w-full h-32 bg-slate-700"
            src={coverImage ? coverImage : "cover.jpeg"}
            alt="no image"
          />
        </div>
      )}
      <div className="profileImage flex items-center justify-center">
        <img
          className="h-20 w-20 block bg-slate-500 rounded-full"
          src={profileImage}
          alt="no image"
        />
      </div>
      <div className="coverImage">
        <h1 className="text-3xl text-white">{fullName}</h1>
        <h1 className="text-slate-400">{tittle}</h1>
      </div>
    </div>
  );
}

export default ProfileHeader;
