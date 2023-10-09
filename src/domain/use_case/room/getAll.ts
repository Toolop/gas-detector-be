const getRoomsByUserid = (userid: number, repository: any) => {
    return repository.findByProperty({ user: userid });
};

export default getRoomsByUserid;
