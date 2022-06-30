import President from "../../components/president";

const lectures = [
  {
    name: "Machine learning",
    id: " 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    points: 4,
  },
  {
    name: "Machine learning 1",
    id: " 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    points: 4,
  },
  {
    name: "Machine learning 2",
    id: " 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    points: 4,
  },
  {
    name: "Machine learning 3",
    id: " 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    points: 4,
  },
  {
    name: "Machine learning 4",
    id: " 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    points: 4,
  },
  {
    name: "Machine learning 5",
    id: " 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    points: 4,
  },
];

export default function PresidentPage() {
  return <President title="Engineering Department" Lectures={lectures} />;
}
