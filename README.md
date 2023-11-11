

# GitHub Analytics Dashboard

## Project Summary
**Title**: GitHub Analytics Dashboard  
**Duration**: August 21, 2023 - December 16, 2023  
**Team Members**: Jung Jun Kim, Sudipta Banerjee, Xianhe Zheng, Chufeng Huang

## Purpose, Scope, and Objectives

### Purpose
Develop a GitHub Analytics Dashboard to provide comprehensive insights into repository activities, user contributions, and overall project health, facilitating better management and decision-making for software teams.

### Scope
The focus is on developing a web-based dashboard featuring activity tracking, user contribution metrics, repository statistics, and real-time analytics. Mobile application development and third-party integrations are out of this project's scope.

### Objectives
- Develop a user-friendly interface with intuitive navigation.
- Implement real-time analytics with less than a minute of latency.
- Ensure data accuracy through rigorous testing.
- Implement robust security measures to protect data integrity.

## Technical Aspects

### Frontend
- **Technologies**: JavaScript, with React.js for the user interface.
- **Key Files**: `App.js` for main application logic, `index.js` for entry point.
- **Data Visualization**: Utilizes libraries for rendering charts and graphs.

### Backend
- **Integration**: Connects with GitHub API for data retrieval.
- **Security**: Focus on secure data handling and encryption methods.

### State Management
- **Tools**: Utilizes React Context API for managing global state within the application, ensuring efficient state management across various components without resorting to external libraries like Redux.

## Setup and Installation
To set up the GitHub Analytics Dashboard on your local machine, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone [https://github.com/Sudiptobanerjee123/CS-587-Github-Analytics-Dashboard-.git]
   cd [repository-directory]
   ```

2. **Install Dependencies**
   Navigate to the project directory and install the necessary dependencies.
   ```bash
   npm install
   ```

3. **Start the Application**
   Run the application in development mode.
   ```bash
   npm start
   ```

   This will open the dashboard in your default web browser. The app will reload if you make edits to the source files.

## Usage

The GitHub Analytics Dashboard is designed to provide a user-friendly interface for analyzing GitHub repository activity. Here's how to use it:

1. **Opening the Dashboard**:
   - Open the dashboard through your web browser by navigating to the deployed URL or running it locally as detailed in the Setup and Installation section.

2. **Authenticating with GitHub**:
   - Upon first use, you will be prompted to authenticate with your GitHub account. Click the 'Login with GitHub' button.
   - You will be redirected to GitHub's OAuth login page. Enter your GitHub credentials and authorize the application to access your GitHub data.

3. **Selecting Repositories for Analysis**:
   - After authentication, you will be presented with a list of your GitHub repositories.
   - Select the repository(ies) you wish to analyze by clicking on them. You can select multiple repositories for a comparative analysis.

4. **Viewing Analytics**:
   - Once a repository is selected, the dashboard will display various metrics such as commit frequency, pull request trends, issue resolution times, and contributor activities.
   - The data is presented in various formats, including charts and graphs, for easy interpretation.

5. **Customizing the Dashboard**:
   - Use the customization options to filter the data based on date ranges, specific metrics, or contributors.
   - You can adjust the views to focus on particular aspects of the repository activity.

6. **Interpreting the Data**:
   - Hover over elements in charts and graphs for detailed information.
   - Use the insights gained from the dashboard to guide project management decisions, understand team dynamics, and identify areas for improvement.

7. **Logging Out**:
   - When finished, you can log out of your GitHub session through the dashboard's logout option.

Please note that the dashboard is read-only and does not allow modifications to repository data. It is intended as an analytical tool to provide insights into your GitHub project activity.


## Team members
- PM: Chufeng Huang
- LD: Sudipta Banerjee
- UI/UX: Jung Jun Kim
- QA: Xianhe Zheng

## Contributing
Contributions are welcome. Please read the contribution guidelines before submitting a pull request.

## Docker commands

### Build the Docker Image
docker build -t my-react-app .

### Run the Docker Container
docker run -p 3000:3000 my-react-app

### See Running Containers
docker ps


### Pushing to Docker Hub
docker login
docker tag my-react-app <your-dockerhub-username>/my-react-app:latest
docker push <your-dockerhub-username>/my-react-app:latest


