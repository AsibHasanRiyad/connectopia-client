const Stats = () => {
  return (
    <div>
      <div className="stats w-full bg-transparent text-gray-200 shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
          </div>
          <div className="stat-title text-gray-300">Total Users</div>
          <div className="stat-value text-green-500">25.6K</div>
          <div className="stat-desc text-gray-300">40% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-gray-300">Total Likes</div>
          <div className="stat-value text-green-500">2.6M</div>
          <div className="stat-desc text-gray-300">33% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-gray-300">Total Comment</div>
          <div className="stat-value text-green-500">100k</div>
          <div className="stat-desc text-gray-300">21% more than last month</div>
        </div>

      </div>
    </div>
  );
};

export default Stats;
