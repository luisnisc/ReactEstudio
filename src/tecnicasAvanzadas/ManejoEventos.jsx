export default function MyButton() {
    const handleClick = () => {
      alert('Hiciste clic en el botón');
    };
  
    return <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleClick}>Haz clic en mí</button>;
  }