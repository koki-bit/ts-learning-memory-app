import { sampleRecords } from "@/data/sampleRecords";
import { addStudyRecord, filterByCategory, findById,getTotalMinutes } from "@/lib/studyRecordOperations";

const addedRecords = addStudyRecord(sampleRecords, 
  {
    id : "addedId-1",
    title : "addedTitle-1",
    category : "nextjs",
    minutes : 60
  });
const filteredCategoryRecords = filterByCategory(sampleRecords, "typescript");
const foundRecord = findById(sampleRecords, "sa");
const totalMinutes = getTotalMinutes(sampleRecords);
const categoryTotalMinutes = getTotalMinutes(filteredCategoryRecords);

export default function Home() {
  return (
    <main>
      <h1>学習記録の処理結果</h1>

      <section>
        <h2>元の学習記録</h2>
        <ul>
          {sampleRecords.map((record) => (
            <li key={record.id}>
              {record.title} / {record.category} / {record.minutes}分
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>カテゴリで絞り込んだ結果（typescript）</h2>
        <ul>
          {filteredCategoryRecords.map((record) => (
            <li key={record.id}>
              {record.title} / {record.category} / {record.minutes}分
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>記録を追加した結果</h2>
        <ul>
          {addedRecords.map((record) => (
            <li key={record.id}>
              {record.title} / {record.category} / {record.minutes}分
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>IDで検索した結果</h2>
        {foundRecord !== undefined ? (
          <p>
            {foundRecord.title} / {foundRecord.category} /
            {foundRecord.minutes}分
          </p>
        ) : (
          <p>該当する学習記録がありません</p>
        )}
      </section>

      <section>
        <h2>学習時間の合計</h2>
        <p>全記録：{totalMinutes}分</p>
        <p>typescript：{categoryTotalMinutes}分</p>
      </section>
    </main>
  );
}