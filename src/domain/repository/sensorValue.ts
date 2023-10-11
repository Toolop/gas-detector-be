export default function sensorValueRepository(repository: any) {
    const findById = (id: any) => repository.findLastById(id);
    const add = (user: any) => repository.add(user);

    return {
        findById,
        add,
    };
}
