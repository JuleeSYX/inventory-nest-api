 export const generateUid = async (model: any): Promise<number> => {
    let uid: number = 1;
    const result = await model.findOne().sort({
        field: 'asc',
        uid: -1,
    });
    if(result){
        uid = result.uid + 1;
    }
    return uid;
}