function ThanhVienSangLap() {
const members = [
  {
    id: 1,
    name: 'Nguyễn Hoàng Hưng',
    position: 'Leader',
    avt: 'https://img.freepik.com/premium-photo/adorable-male-manager-character-cute-boy-supervisor-illustration-cartoon-office-manager-young-pro_980716-79599.jpg?w=740'
  },
  {
    id: 2,
    name: 'Tô Thành An',
    position: 'Developer',
    avt: 'https://img.freepik.com/premium-vector/cute-boy-with-laptop-city-vector-cartoon-illustration_1142-74734.jpg?w=740'
  },
  {
    id: 3,
    name: 'Đỗ Trọng Nhân',
    position: 'Technical Writer',
    avt: 'https://img.freepik.com/premium-vector/young-man-sitting-table-writing-notebook-vector-illustration_1142-66642.jpg?w=740'
  },
  {
    id: 4,
    name: 'Phan Nguyên Lịch',
    position: 'Developer',
    avt: 'https://img.freepik.com/premium-vector/cute-boy-with-laptop-his-hands-vector-illustration_1142-81166.jpg?w=740'
  },
  {
    id: 5,
    name: 'Trần Thanh Phát',
    position: 'Designer',
    avt: 'https://img.freepik.com/premium-vector/vector-illustration-man-with-glasses-laptop-round-frame_1057-121074.jpg?w=740'
  },
  {
    id: 6,
    name: 'Nguyễn Văn Hoành',
    position: 'Tester',
    avt: 'https://img.freepik.com/free-vector/businessman-with-computer_23-2147620920.jpg?t=st=1715219467~exp=1715223067~hmac=c5263da39963f1d7d21399684075560c274ed392235eebd9ec365a6f25e432db&w=740'
  }
]

  return (
    <div className="w-full bg-main bg-opacity-60 py-">
      <div className="w-main mx-auto text-right pt-4">
        <h3 className="uppercase text-2xl text-white py-2 font-semibold  border-b-2 border-white inline-block">
          Thành viên sáng lập
        </h3>
      </div>
      <div className="w-main mx-auto grid grid-cols-3 gap-6 py-8">
          {members.map((member) => {
            return (
              <div key={member.id} className="shadow-xl flex flex-col bg-main p-2 rounded hover:scale-105">
                <img src={member.avt} className="w-4/5 mx-auto rounded-full my-2"/>
                <span className="text-white text-xl text-center font-bold">{member.name}</span>
                <span  className="text-white text-center">{member.position}</span>
              </div>
            )
          })}
      </div>
    </div>
  );
}

export default ThanhVienSangLap;
