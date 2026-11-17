export const CONFERENCE_INFO = {
  name: "Catholic Youth Conference 2027",
  shortName: "CYC 2027",
  tagline: "National Catholic Youth Conference",
  theme: "Rooted in Faith, United in Hope • 'Behold, I make all things new' (Rev 21:5)",
  dates: "July 23 – 25, 2027",
  location: "Portland, Oregon",
  attendeeCap: 2500,
  registrationDeadline: "July 1, 2027"
};

export const US_STATES = [
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
  { code: "DC", name: "District of Columbia" },
  { code: "PR", name: "Puerto Rico" }
];

export const INITIAL_ATTENDEES = [
  {
    id: "CYC-2027-1842",
    firstName: "Maria",
    lastName: "Santos",
    contact: "maria.santos@parishyouth.org",
    phone: "(317) 555-0149",
    age: 17,
    city: "Indianapolis",
    state: "IN",
    createdAt: "2027-04-12T14:22:00Z"
  },
  {
    id: "CYC-2027-2491",
    firstName: "Joseph",
    lastName: "Miller",
    contact: "joseph.miller@outlook.com",
    phone: "(312) 555-8321",
    age: 18,
    city: "Chicago",
    state: "IL",
    createdAt: "2027-04-14T09:15:00Z"
  },
  {
    id: "CYC-2027-3104",
    firstName: "Therese",
    lastName: "Martin",
    contact: "therese.m@gmail.com",
    phone: "(513) 555-9012",
    age: 16,
    city: "Cincinnati",
    state: "OH",
    createdAt: "2027-04-18T16:40:00Z"
  }
];

export const SCHEDULE_DAYS = [
  {
    day: "Day 1 • Friday, July 23",
    title: "Gather in Christ",
    items: [
      { time: "01:00 PM - 03:30 PM", title: "Parish Check-In & Welcome Packet Pickup", location: "Grand Hall A", tag: "Arrival" },
      { time: "04:00 PM - 05:30 PM", title: "Opening Celebration & Keynote: 'Called by Name'", location: "Main Arena", tag: "Keynote" },
      { time: "06:00 PM - 07:30 PM", title: "Community Dinner & Youth Fellowship", location: "Fellowship Pavilion", tag: "Dinner" },
      { time: "08:00 PM - 10:00 PM", title: "Praise & Worship with Eucharistic Adoration", location: "Main Arena", tag: "Adoration" }
    ]
  },
  {
    day: "Day 2 • Saturday, July 24",
    title: "Encounter & Renewal",
    items: [
      { time: "08:30 AM - 09:30 AM", title: "Morning Rosary & Celebration of Daily Mass", location: "Main Arena", tag: "Holy Mass" },
      { time: "10:00 AM - 12:00 PM", title: "Youth Discipleship & Leadership Workshops", location: "Breakout Rooms", tag: "Workshop" },
      { time: "12:15 PM - 01:30 PM", title: "Lunch & Vocations Fair", location: "Grand Ballroom", tag: "Fellowship" },
      { time: "02:00 PM - 04:30 PM", title: "Sacrament of Reconciliation (Confession) & Service", location: "St. John Paul II Chapel", tag: "Sacrament" },
      { time: "08:00 PM - 10:30 PM", title: "Candlelight Eucharistic Procession & Concert", location: "Arena Stage", tag: "Worship" }
    ]
  },
  {
    day: "Day 3 • Sunday, July 25",
    title: "Go Forth in Hope",
    items: [
      { time: "08:30 AM - 09:45 AM", title: "Breakfast & Small Group Reflection", location: "Skyline Terrace", tag: "Breakfast" },
      { time: "10:30 AM - 12:30 PM", title: "Solemn Closing Mass & Commissioning Ceremony", location: "Main Arena", tag: "Closing Mass" },
      { time: "12:30 PM - 01:30 PM", title: "Final Blessing & Youth Mission Send-Off", location: "Main Stage", tag: "Blessing" }
    ]
  }
];

export const FAQS = [
  {
    q: "Who is eligible to attend Catholic Youth Conference 2027?",
    a: "CYC 2027 is open to high school students, parish youth groups, young adults, chaperones, and youth ministers."
  },
  {
    q: "Will the Sacraments be celebrated at the conference?",
    a: "Yes! Daily Holy Mass, Eucharistic Adoration, and the Sacrament of Reconciliation (Confession with diocesan priests) are central to the conference."
  },
  {
    q: "Can parish youth groups register members through this form?",
    a: "Yes! Each youth attendee or parent can complete this simple registration with their contact information, city, and state."
  },
  {
    q: "Where does the conference take place?",
    a: "At the Convention Center in Indianapolis, IN, from July 23–25, 2027."
  }
];
