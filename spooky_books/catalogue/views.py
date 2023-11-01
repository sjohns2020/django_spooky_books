from django.shortcuts import render, get_object_or_404, redirect
from .models import *
from .forms import NewForm, EditForm, SaveForm
from .utils import *

# Create your views here.


from django.db.models import Q


# INDEX
def index(request):
    # Handle Filter queries for title, author and ISBN
    title_query = request.GET.get("title", "")
    author_query = request.GET.get("author", "")
    isbn_query = request.GET.get("ISBN", "")

    # Get all Books
    books = Book.objects.all()

    # If a title query is provided, filter books by title
    if title_query:
        books = books.filter(title__icontains=title_query)

    # If an author query is provided, filter books by author's first or last name
    # Allows user to query authors full name
    if author_query:
        books = books.filter(
            # Q is a class that represents a query expression
            # used to perform complex database lookups and
            # filter operations. It allows you to build more
            # complex queries by combining multiple conditions
            # using logical operators like AND, OR, and NOT.
            Q(author__first_name__icontains=author_query)
            | Q(author__last_name__icontains=author_query)
        )

    # If an ISBN query is provided, filter books by ISBN
    if isbn_query:
        books = books.filter(ISBN__icontains=isbn_query)
    return render(request, "books/index.html", {"books": books})


# SHOW
def show(request, id):
    book = get_object_or_404(Book, pk=id)
    return render(request, "books/show.html", {"book": book})


# New form only requires a Title and Author Name
def new(request):
    if request.method == "POST":
        form = NewForm(request.POST)
        if form.is_valid():
            title = form.cleaned_data["title"]
            author = form.cleaned_data["author"]
            author_id = author.id  # Get the author's ID
            # Use utils methods to fetch year, isbn and image
            # From Google Books API
            publication_year = get_publication_year(title, author)
            isbn = get_isbn(title, author)
            image = get_thumbnail_image(title, author)

            # Create a new Book instance
            book = Book(
                title=title,
                author_id=author_id,
                publication_year=publication_year,
                ISBN=isbn,
                image=image,
            )
            book.save()
            return redirect("books_list")
    else:
        form = NewForm()

    return render(request, "books/new.html", {"form": form})


# EDIT
def edit(request, id):
    book = get_object_or_404(Book, pk=id)
    if request.method == "POST":
        form = EditForm(request.POST, instance=book)
        if form.is_valid():
            form.save()
            return redirect("books_show", id=book.id)
    else:
        form = EditForm(instance=book)
    return render(request, "books/edit.html", {"form": form, "book": book})


# DELETE
def delete(request, id):
    book = get_object_or_404(Book, pk=id)
    book.delete()
    return redirect("books_list")
