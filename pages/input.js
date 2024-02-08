import { useState } from 'react';
import { useRouter } from 'next/router';

const InputPage = () => {
  const [schoolName, setSchoolName] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can implement logic to store the data, for simplicity, let's use local storage
    localStorage.setItem('schoolName', schoolName);

    // Redirect to display page
    router.push('/display');
  };

  return (
    <div>
      <h1>Input School Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          School Name:
          <input
            type="text"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputPage;
