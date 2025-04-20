import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

const ContentCard = ({
  title,
  excerpt,
  featuredImage,
  date,
  leader,
  meetingTime,
  isActive,
  linkTo,
}) => {
  const navigate = useNavigate();

  // Format date if provided and is a valid date string
  const formattedDate = date
    ? // Check if it's a valid date string
      !isNaN(Date.parse(date))
      ? new Date(date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : date // If not a valid date, use it as is (for free text)
    : null;

  const handleClick = () => {
    navigate(linkTo);
  };

  return (
    <Card
      className="bg-white rounded-lg overflow-hidden border border-[#f5f5f5] h-full flex flex-col"
      elevation={0}
    >
      {/* Image Section */}
      {featuredImage ? (
        <div className="relative h-40 flex items-center justify-center overflow-hidden">
          <CardMedia
            component="img"
            height="160"
            image={featuredImage}
            alt={title}
            className="object-contain w-full h-full"
            onError={(e) => {
              console.error("Error loading image:", featuredImage);
              // Try using mediaItemUrl if available
              if (featuredImage.mediaItemUrl) {
                e.target.src = featuredImage.mediaItemUrl;
              } else {
                e.target.style.display = "none";
              }
            }}
          />
        </div>
      ) : (
        <div className="h-40 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">No image available</span>
        </div>
      )}

      {/* Status Badge */}
      {typeof isActive === "boolean" && (
        <div className="absolute top-2 right-2">
          <Chip
            label={isActive ? "Active" : "Inactive"}
            size="small"
            color={isActive ? "success" : "default"}
            className={isActive ? "bg-green-100" : "bg-gray-100"}
          />
        </div>
      )}

      {/* Content Section */}
      <CardContent className="flex-1 flex flex-col">
        {/* Title */}
        <Typography
          gutterBottom
          variant="h6"
          component="h3"
          className="font-bold text-gray-900 line-clamp-2"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {title}
        </Typography>

        {/* Meta Information */}
        <div className="space-y-2 mb-3">
          {leader && (
            <div className="flex items-center text-sm text-gray-600">
              <FaUser className="mr-1" size={14} />
              <span>{leader}</span>
            </div>
          )}

          {meetingTime && (
            <div className="flex items-center text-sm text-gray-600">
              <FaCalendarAlt className="mr-1" size={14} />
              <span>{meetingTime}</span>
            </div>
          )}

          {formattedDate && (
            <div className="flex items-center text-sm text-gray-600">
              <FaCalendarAlt className="mr-1" size={14} />
              <span>{formattedDate}</span>
            </div>
          )}
        </div>

        {/* Excerpt */}
        {excerpt && (
          <Typography
            variant="body2"
            color="text.secondary"
            className="mb-4 line-clamp-3"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
          >
            {excerpt}
          </Typography>
        )}
      </CardContent>

      {/* Footer/Button Section */}
      <div className="p-4 pt-0 mt-auto">
        <Button
          onClick={handleClick}
          variant="contained"
          fullWidth
          size="small"
          color="primary"
          className="bg-blue-600 hover:bg-blue-700"
        >
          Learn More
        </Button>
      </div>
    </Card>
  );
};

export default ContentCard;
