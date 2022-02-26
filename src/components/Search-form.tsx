import React from "react";

export default function SearchForm() {
    return (
        <form className="form-group">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control me-sm-2"
                    placeholder="キーワードを入力してください"
                ></input>
                <button
                    type="submit"
                    className="btn btn-secondary my-2 my-sm-0"
                    id="button-addon2"
                >
                    検索
                </button>
            </div>
        </form>
    );
}