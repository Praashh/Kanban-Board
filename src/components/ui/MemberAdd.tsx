
const MemberList = () => {
  const members = [
    { id: 1, imgSrc: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80', name: 'Member 1' },
    { id: 2, imgSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60', name: 'Member 2' },
     { id: 3, imgSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60', name: 'Member 2' }
  ];

  return (
    <div className="flex items-center -space-x-6">
      {members.map(member => (
        <img
          key={member.id}
          src={member.imgSrc}
          alt={member.name}
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      ))}
      <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full cursor-pointer">
        +
      </div>
    </div>
  );
};

export default MemberList;
