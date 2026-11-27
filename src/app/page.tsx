import { Category } from "@/types/category";
import { StudyRecord } from "@/types/studyRecord";
// まずはReactのuseStateなどは使わず、TypeScriptの関数と配列操作だけで実装する

const sampleRecords: StudyRecord[] = [
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

const addStudyRecord = (
  records: StudyRecord[],
  newRecord: StudyRecord
): StudyRecord[] => {
  const newRecords = [...records, newRecord];
  return newRecords;
}

const filterByCategory = (
  records: StudyRecord[],
  category: Category,
): StudyRecord[] => {
  const filterRecords = records.filter((record) => record.category === category);
  return filterRecords;
}

export default function Home() {
  return (
    <div>
      <ul>
        {sampleRecords.map((sampleRecord) => (
          <li key={sampleRecord.id}>
            <p>{sampleRecord.title}</p>
            <p>{sampleRecord.category}</p>

            {sampleRecord.minutes >= 0 && (
              <p>{sampleRecord.minutes}</p>
            )}
            
            {sampleRecord.memo !== undefined && (
              <p>{sampleRecord.memo}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
