import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer sHZ8CJ0rAQpQUyX9QIQl7rkOjlkLb1FuDIZLYAdtMDtiQGuAX4hObjmxwaW-tQHu2Z3qSYllZ8WVFtAZ5FCVkoXcLognWX3_4e3oacy1QxewP0wKaTa8ZQqIARzAY3Yx",
  },
});
