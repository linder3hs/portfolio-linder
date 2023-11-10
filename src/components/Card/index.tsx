interface Props {
  title: string;
  date: string;
  subject: string;
  text: string;
}

export default function Card({ title, date, subject, text }: Props) {
  return (
    <div className="shadow p-3 rounded">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex gap-10 my-5">
        <p>{date}</p> |<p>{subject}</p>
      </div>
      <p>{text}</p>
    </div>
  );
}
