import data from './data.json';
import Jobs from './components/jobs';
import { useState } from 'react';
import Header from './components/header';

function App() {
  const [filterKeywords, setFilterKeywords] = useState([]);

  // Function to add keywords for filtering
  const addFilterKeywords = (keyword) => {
    if (!filterKeywords.includes(keyword)) {
      setFilterKeywords([...filterKeywords, keyword]);
    }
  };
  // Function to clear all keywords
   const clearAll = () => {
    setFilterKeywords([]);
   }; 
  // Function to remove keywords from filtering
  const deleteKeyword = (keyword) => {
    const newKeywords = filterKeywords.filter((key) => key !== keyword);
    setFilterKeywords(newKeywords);
  };

  // Function to filter jobs based on keywords
  const filterJobs = (job) => {
    if (filterKeywords.length === 0) {
      return true; // If no filters applied, show all jobs
    }

    const jobKeywords = [
      job.role,
      job.level,
      ...job.languages,
      ...job.tools,
    ];

    // Check if job contains all keywords in filterKeywords
    return filterKeywords.every((keyword) => jobKeywords.includes(keyword));
  };

  return (
    <div>
      <div className="header"></div>
      {filterKeywords.length > 0 && (
        <Header 
        keywords={filterKeywords}
         removeKeywords={deleteKeyword}
         clearAll = {clearAll} />
      )}
      {/* Pass only filtered jobs to Jobs component */}
      <Jobs data={data.filter(filterJobs)} setKeywords={addFilterKeywords} />
    </div>
  );
}

export default App;
