import data from '../../data';

export default function projectHandler({ query: { id } }, res) {
  const filtered = data.filter((item) => item.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Project with id: ${id} not found.` });
  }
}
