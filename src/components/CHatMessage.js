const CHatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-md p-2">
      <img
        className="rounded-full"
        src="https://yt4.ggpht.com/3n8YXFUzMPTEEV4EiQHkSz5beMvqmMpkJuZDQoktsQBADrm5pZGz_Uls-RaaARZHvGe383cfvA=s32-c-k-c0x00ffffff-no-rj"
      />
      <p className="px-3 font-bold">{name}</p>
      <p className="break-all">{message}</p>
    </div>
  );
};

export default CHatMessage;
