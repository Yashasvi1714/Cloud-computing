# Cloud Computing Consultant Database Application

This project implements a relational database application hosted on the Azure cloud platform, focusing on storing and querying data related to consultants for hire. The application integrates a cloud-based MSSQL database with a Node.js/Express server running on a Windows 10 virtual machine. It demonstrates key concepts of cloud computing such as API development, virtual machine setup, database management, and network security through firewalls.

## Project Overview

The application consists of the following components:
1. A **relational database** (MSSQL) hosted on Azure that stores data about consultants.
2. A **Node.js/Express API server** running on a Windows 10 virtual machine on Azure.
3. Two **API endpoints** for querying consultant data based on experience and hourly rate for a specific skill:
   - **Get the consultant with the most experience** for a given skill.
   - **Get the consultant with the lowest hourly rate** for a given skill.

## Architecture

### Cloud Components

1. **MSSQL Database**: Hosted on Azure, stores the data for consultants. The database is secured with a firewall that allows only the Data Server to connect.
2. **Data Server (Node.js/Express)**: A Windows 10 virtual machine on Azure running a Node.js/Express server that communicates with the MSSQL database. The virtual machine is provisioned with one virtual CPU and a minimum of 4 GB of RAM.
3. **Firewall**: Configured to allow access only from the Data Server to the MSSQL database, ensuring secure communication.

### System Diagram

- **Database (MSSQL)**: Stores consultant information such as name, skill, years of experience, and hourly rate.
- **API Server (Node.js/Express)**: Interacts with the database and serves two primary endpoints for querying consultant data.
- **Firewall Configuration**: Restricts database access to only the Data Server for security.

## API Endpoints

The application exposes two HTTP endpoints to retrieve consultant data based on skill:

### 1. **Most Experienced Consultant Endpoint**

**Request:**
```http
GET http://host:port/most_experience?skill_name='skill_name'
