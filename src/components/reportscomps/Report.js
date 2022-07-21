export default function Report({
  date,
  member,
  client,
  project,
  category,
  time,
}) {
  return (
    <tr>
      <td>{date}</td>
      <td>{member}</td>
      <td>{client}</td>
      <td>{project}</td>
      <td>{category}</td>
      <td className="small">{time}</td>
    </tr>
  );
}
