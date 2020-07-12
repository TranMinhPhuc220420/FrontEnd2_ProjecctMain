<?php


class Post extends Database
{
    public function getAll(){
        $sql = self::$connect->prepare(
            "SELECT * FROM `post`, `category` 
                    WHERE post.ID_CATEGORY = category.ID_CATEGORY 
                    ORDER BY DATE_UP DESC");
        $sql->execute();

        return $sql->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    public function getByID($idPost){
        $sql = self::$connect->prepare(
            "SELECT * FROM `post`, `category` 
                    WHERE post.ID_CATEGORY = category.ID_CATEGORY 
                    AND post.ID_POST = $idPost");
        $sql->execute();

        return $sql->get_result()->fetch_all(MYSQLI_ASSOC)[0];
    }

    public function getByTitle($key){
        $key = '%' . $key . '%';
        $sql = self::$connect->prepare(
            "SELECT * FROM `post`, `category` 
                    WHERE post.ID_CATEGORY = category.ID_CATEGORY
                    AND TITLE LIKE ?");
        $sql->bind_param('s', $key);
        $sql->execute();

        return $sql->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    public function getByCategory($idCategory){
        $sql = self::$connect->prepare(
            "SELECT * FROM `post`, `category` 
                    WHERE post.ID_CATEGORY = category.ID_CATEGORY 
                    AND post.ID_CATEGORY = $idCategory 
                    ORDER BY DATE_UP DESC ");
        $sql->execute();

        return $sql->get_result()->fetch_all(MYSQLI_ASSOC);
    }
}