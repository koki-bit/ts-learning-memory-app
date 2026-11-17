import { StudyRecord } from "@/types/studyRecord";

const sampleDatas: StudyRecord[] = [
  {
    id : "sample-1",
    title : "sampleTitle1",
    category : "typescript",
    minutes : 60
  },
  {
    id : "sample-2",
    title : "sampleTitle2",
    category : "react",
    minutes : 90,
    memo : "Samplememo"
  }
];

export default function Home() {
  return (
    <div>
      <ul>
        {sampleDatas.map((sampleData) => (
          <li key={sampleData.id}>
            <p>{sampleData.title}</p>
            <p>{sampleData.category}</p>

            {sampleData.minutes >= 0 && (
              <p>{sampleData.minutes}</p>
            )}
            
            {sampleData.memo !== undefined && (
              <p>{sampleData.memo}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
