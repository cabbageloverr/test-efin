export interface GetData {
    data_1: string
    data_2: string
    data_3: string
    data_4: string
    data_5: string
    data_6: string
  
}

export default async function getData() {
    const request: RequestInit = {
        method: 'GET',
    }
        return await fetch('/api/ExamAPI/examdata', request).then(x => x.json())


}