import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css"; // Import CSS

const HomePage: React.FC = () => {
  const navigate = useNavigate(); // Hook điều hướng

  const cards = [
    { title: "Personal", icon: "👤", link: "/detailPersonal" },
    { title: "Schedule", icon: "📅", link: "/schedule" },
    { title: "History", icon: "📖", link: "/history" },
    { title: "Event", icon: "🎤", link: "/ListEvent" },
    { title: "Notifications", icon: "🔔", link: "/notifications" },
    { title: "Feedback", icon: "⭐", link: "/feedback" },
  ];

  return (
    <div className="container my-5">
      <div className="row text-center">
        {cards.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div
              className="card shadow-sm"
              style={{
                borderRadius: "20px",
                cursor: "pointer",
                transition: "transform 0.2s ease",
                height: "349px", // Chiều cao của card
                width: "258px", // Chiều rộng của card
                margin: "0 auto", // Căn giữa card trong cột
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F5F5F5",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              onClick={() => navigate(card.link)} // Điều hướng khi click vào card
            >
              <div
                style={{
                  fontSize: "100px", // Logo lớn hơn
                  marginBottom: "20px",
                }}
              >
                {card.icon}
              </div>
              <h5
                className="card-title"
                style={{
                  fontSize: "24px", // Tăng kích thước title
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {card.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
