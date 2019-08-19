var express=require('express');

const router=express.Router();
var book_arr=[{
    "title":"To Kill a Mockingbird",
    "author":"Harper Lee",
    "description":"To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature, winning the Pulitzer Prize. ",
    "category":"Fiction",
    "price":141,
    "urltoimage":"https://images-na.ssl-images-amazon.com/images/I/816JeXYArDL.jpg"


},
{
    "title":"A Song of Ice and Fire",
    "author":" George R. R. Martin",
    "description":"A Song of Ice and Fire is a series of epic fantasy novels by the American novelist and screenwriter George R. R. Martin. He began the first volume of the series, A Game of Thrones, in 1991, and it was published in 1996.",
    "category":"Fantasy",
    "price":250,
    "urltoimage":"https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg/220px-A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg"

},

{
    "title":"The Da Vinci Code",
    "author":"Dan Brown",
    "description":"The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown. It is Brown's second novel to include the character Robert Langdon: the first was his 2000 novel Angels & Demons. The Da Vinci Code follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ having been a companion to Mary Magdalene.",
    "category":"Thriller",
    "price":249,
    "urltoimage":"https://rukminim1.flixcart.com/image/416/416/jp2xoy80/book/0/1/7/the-da-vinci-code-original-imafbeey5dyjxu5h.jpeg?q=70"

},
{
    "title":"Harry Potter and the Philosopher's Stone",
    "author":"J. K. Rowling",
    "description":"Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. ",
    "category":"Fantasy",
    "price":299,
    "urltoimage":"https://images-na.ssl-images-amazon.com/images/I/51ifu1aebKL._SX332_BO1,204,203,200_.jpg"
},
{
    "title":"I Too Had a Love Story",
    "author":"Ravinder Singh",
    "description":"I Too Had a Love Story is an English autobiographical novel written by Ravinder Singh. This was the debut novel of the author and was first published in 2008 by Srishti Publishers, in 2012 it was republished by Penguin India. ",
    "category":"Romance",
    "price":200,
    "urltoimage":"https://images-na.ssl-images-amazon.com/images/I/51JdOfIHZ9L._SX324_BO1,204,203,200_.jpg"
},
{
    "title":"Diary of a Wimpy Kid: The Ugly Truth",
    "author":"Jeff Kinney",
    "description":"Diary of a Wimpy Kid: The Ugly Truth is a 2010 bestselling children's fiction book by American author and cartoonist Jeff Kinney and is the fifth book in the Diary of a Wimpy Kid series. The Ugly Truth sold 548,000 copies in its initial week of publication, edging out Decision Points, which sold 437,000 copies. ",
    "category":"Comedy",
    "price":225,
    "urltoimage":"https://images-na.ssl-images-amazon.com/images/I/51EuBxD7W6L._SX338_BO1,204,203,200_.jpg"
},
{
    "title":"The Alchemist",
    "author":"Paulo Coelho",
    "description":"The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. ",
    "category":"Fiction",
    "price":199,
    "urltoimage":"https://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s550x406.jpg"
},
{
    "title":"Half Girlfriend",
    "author":"Chetan Bhagat",
    "description":"Half Girlfriend is an Indian English coming of age, young adult romance novel by Indian author Chetan Bhagat. The novel, set in rural Bihar, New Delhi, Patna, and New York, is the story of a Bihari boy in quest of winning over the girl he loves. ",
    "category":"Romance",
    "price":98,
    "urltoimage":"https://images-na.ssl-images-amazon.com/images/I/51IpHUkHttL._SX326_BO1,204,203,200_.jpg"
},
{
    "title":"The Monk Who Sold His Ferrari",
    "author":"Robin Sharma",
    "description":"The Monk Who Sold His Ferrari is a self-help book by Robin Sharma, a writer and motivational speaker. The book is a business fable derived from Sharma's personal experiences after leaving his career as a litigation lawyer at the age of 25. ",
    "category":"Fiction",
    "price":185,
    "urltoimage":"https://images-na.ssl-images-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg"

},
{
    "title":"The Fault in Our Stars",
    "author":"John Green",
    "description":"The Fault in Our Stars, published in January 2012, is the sixth novel by author John Green. The title is inspired by Act 1, Scene 2 of Shakespeare's play Julius Caesar, in which the nobleman Cassius says to Brutus: 'The fault, dear Brutus, is not in our stars, / But in ourselves, that we are underlings.'",
    "category":"Romance",
    "price":250,
    "urltoimage":"https://images-na.ssl-images-amazon.com/images/I/51BYcXvTimL._SX332_BO1,204,203,200_.jpg"

},
{
    "title":"Revolution 2020",
    "author":"Chetan Bhagat",
    "description":"Revolution 2020: Love, Corruption, Ambition is a 2011 novel by Chetan Bhagat. Its story is concerned with a love triangle, corruption and a journey of self-discovery.",
    "category":"Romance",
    "price":222,
    "urltoimage":"https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Revolution_2020.jpg/220px-Revolution_2020.jpg"

},
{
    "title":"Born a Crime",
    "author":"Trevor Noah",
    "description":"Born a Crime: Stories from a South African Childhood is an autobiographical comedy book written by the South African comedian Trevor Noah. ",
    "category":"Comedy",
    "price":499,
    "urltoimage":"https://images-na.ssl-images-amazon.com/images/I/91mePFAgywL.jpg"
}
];

router.get("/",function(req,res){
    res.render("books",{pagetitle:"Library",nav:[{link:"books",title:"Books"},{link:"authors",title:"Authors"},{link:"/signup",title:"SIGN UP"},{link:"/login",title:"LOGIN"},{link:"/addbooks",title:"ADD BOOKS"}],booksarray:book_arr});
})
router.get("/:id",function(req,res){
   
    res.render("singlebook",{pagetitle:"Library",nav:[{link:"books",title:"Books"},{link:"authors",title:"Authors"},{link:"/signup",title:"SIGN UP"},{link:"/login",title:"LOGIN"},{link:"/addbooks",title:"ADD BOOKS"}],book:book_arr[req.params.id]});
    var temp=req.params.id;
    console.log(temp);
   
    
})

module.exports=router;