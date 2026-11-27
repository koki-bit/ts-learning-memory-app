import { sampleRecords } from "@/data/sampleRecords";
import { addStudyRecord, filterByCategory } from "@/lib/studyRecordOperations";

const addedRecords = addStudyRecord(sampleRecords, 
  {
    id : "addedId-1",
    title : "addedTitle-1",
    category : "nextjs",
    minutes : 60
  });
const filteredRecords = filterByCategory(sampleRecords, "typescript");


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

        {filteredRecords.map((filteredRecord) => (
          <li key={filteredRecord.id}>
            <p>{filteredRecord.title}</p>
            <p>{filteredRecord.category}</p>

            {filteredRecord.minutes >= 0 && (
              <p>{filteredRecord.minutes}</p>
            )}
            
            {filteredRecord.memo !== undefined && (
              <p>{filteredRecord.memo}</p>
            )}
          </li>
        ))}

        {addedRecords.map((addedRecord) => (
          <li key={addedRecord.id}>
            <p>{addedRecord.title}</p>
            <p>{addedRecord.category}</p>

            {addedRecord.minutes >= 0 && (
              <p>{addedRecord.minutes}</p>
            )}
            
            {addedRecord.memo !== undefined && (
              <p>{addedRecord.memo}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
